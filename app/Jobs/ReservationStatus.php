<?php

namespace App\Jobs;

use App\Models\Admin\OrderPeriod;
use App\Models\Employee\Order;
use App\Models\Offer;
use App\Models\Reservation;
use App\Models\ShopSetting;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ReservationStatus implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $shop=  auth('shop')->user();
        $shopSetting=ShopSetting::query()->where('shop_id',$shop->id)->first();
        $shopSetting->reservation_period;
        $reservations = Reservation::where('status', 0)
            ->where('reservation_date', Carbon::today())
            ->whereRaw('TIMESTAMPDIFF(MINUTE, reservation_time, NOW()) > ?', [$shopSetting->reservation_period])
            ->get();

        $reservations->each(function ($reservation) {
            $reservation->update(['status' => 2]);
        });
    }
}
