<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;

use Illuminate\Support\Facades\Log;


class ReservationStatusCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'foodbus:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reservation Status Cron';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $orderPeriod = OrderPeriod::where('status', 1)
            ->where('period_date', Carbon::today())
            ->whereRaw(('CAST("' . (Carbon::now()->format('H:i:s')) . '" AS TIME) >=  end_time'))->first();
        $orderPeriod->update(array('status' => 2));
        Order::query()->where('order_period_id',$orderPeriod->id)->update(array('status' => 2));
    }
}
