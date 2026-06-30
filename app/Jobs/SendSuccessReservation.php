<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendSuccessReservation implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $reservation;
    protected $client;
    protected $tables_ids;
    protected $category;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($reservation, $client,$tables_ids,$category)
    {
        $this->reservation = $reservation;
        $this->client      = $client;
        $this->tables_ids  = $tables_ids;
        $this->category    = $category;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            // Mail::to($this->details['email'])->send($email);

            Mail::to($reservation->shop->email)->send('email.success_reservation',
                [
                    'reservation' => $this->$reservation,
                    'client'      => $this->$client,
                    'tables_ids'  => $this->$tables_ids,
                    'category'    => $this->$category
                ],
            );
        }catch (\Exception $exception){

        }
    }
}
