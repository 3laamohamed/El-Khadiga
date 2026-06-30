<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendFormLinkEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $lang;
    protected $subject;
    protected $shop;
    protected $password;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($lang, $subject,$shop,$password)
    {
        $this->lang = $lang;
        $this->subject = $subject;
        $this->shop = $shop;
        $this->password = $password;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            $shop_info = $this->shop;
            $password = $this->password;
            Mail::send('email.form_link',
                ['user' => $shop_info,'password'=>$password,],
                function ($m) use ($shop_info) {
                    $m->to($shop_info->email, '$shop_info->otp_code')->subject($this->subject);
                }
            );
        }catch (\Exception $exception){

        }
    }
}
