<?php

namespace App\Traits;

trait MyFatooraPayment
{
    //Test
//    private $apiURL = 'https://apitest.myfatoorah.com';
//    private $apiKey = ''; //Test token value to be placed here: https://myfatoorah.readme.io/docs/test-token

    //Live
    private $apiURL = 'https://api-sa.myfatoorah.com';

    //private $apiKey = ''; //Live token value to be placed here: https://myfatoorah.readme.io/docs/live-token
    public function createPaymentUrl($reservation, $amount, $clientName, $clientMobile , $PaymentMethodId = null)
    {
        $this->apiKey = env('MYFATOORA_API_KEY', '');

        $postFields = [
            'PaymentMethodId' => $PaymentMethodId,
            'NotificationOption' => 'Lnk', //'SMS', 'EML', or 'ALL'
            'InvoiceValue' => $amount,
            'CustomerName' => $clientName,
            'CustomerMobile' => $clientMobile,
            'MobileCountryCode' => '+966',
            'DisplayCurrencyIso' => 'SAR',
            'Language' => 'ar', //or 'ar'
            'CustomerReference' => $reservation->id,
            'CallBackUrl' => route('success.callback.payment'),
            'ErrorUrl' => route('fail.callback.payment'),
        ];
        $data = $this->sendPayment($this->apiURL, $this->apiKey, $postFields);
        $invoiceId = $data->InvoiceId;
        $paymentLink = $data->InvoiceURL;
        $reservation->invoice_id = $invoiceId;
        $reservation->save();

        return $paymentLink;
    }

    public function getPaymentStatus()
    {
        $keyId = request('paymentId');
        $KeyType = 'paymentId';
        $this->apiKey = env('MYFATOORA_API_KEY', '');

        $postFields = [
            'Key' => $keyId,
            'KeyType' => $KeyType
        ];
        $json = $this->callAPI("$this->apiURL/v2/getPaymentStatus", $this->apiKey, $postFields);
        if ($json->Data->InvoiceStatus == 'Paid') {
            return $json->Data;
        }

        return null;
    }

    private function sendPayment($apiURL, $apiKey, $postFields)
    {

        $json = $this->callAPI("$apiURL/v2/SendPayment", $apiKey, $postFields);
        return $json->Data;
    }

    private function callAPI($endpointURL, $apiKey, $postFields = [], $requestType = 'POST')
    {
        $curl = curl_init($endpointURL);
        curl_setopt_array($curl, array(
            CURLOPT_CUSTOMREQUEST => $requestType,
            CURLOPT_POSTFIELDS => json_encode($postFields),
            CURLOPT_HTTPHEADER => array("Authorization: Bearer $apiKey", 'Content-Type: application/json'),
            CURLOPT_RETURNTRANSFER => true,
        ));

        $response = curl_exec($curl);

        $curlErr = curl_error($curl);

        curl_close($curl);

        if ($curlErr) {
            //Curl is not working in your server
            die("Curl Error: $curlErr");
        }

        $error = $this->handleError($response);
        if ($error) {
            die("Error: $error");
        }

        return json_decode($response);
    }

    private function handleError($response)
    {

        $json = json_decode($response);
        if (isset($json->IsSuccess) && $json->IsSuccess == true) {
            return null;
        }

        //Check for the errors
        if (isset($json->ValidationErrors) || isset($json->FieldsErrors)) {
            $errorsObj = isset($json->ValidationErrors) ? $json->ValidationErrors : $json->FieldsErrors;
            $blogDatas = array_column($errorsObj, 'Error', 'Name');

            $error = implode(', ', array_map(function ($k, $v) {
                return "$k: $v";
            }, array_keys($blogDatas), array_values($blogDatas)));
        } else if (isset($json->Data->ErrorMessage)) {
            $error = $json->Data->ErrorMessage;
        }

        if (empty($error)) {
            $error = (isset($json->Message)) ? $json->Message : (!empty($response) ? $response : 'API key or API URL is not correct');
        }

        return $error;
    }
}
