<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class ExportReservation implements FromView,WithStyles,ShouldAutoSize
{


    /**
    * @return \Illuminate\Support\Collection
    */

    protected $reservations;

    public function __construct($reservations)
    {
        $this->reservations = $reservations;

    }

    public function view(): View
    {
        $reservations = $this->reservations;

        return view('ExcelExport.reservation', [
            'reservations' => $reservations
        ]);
    }

    public function styles(Worksheet  $sheet)
    {
        $sheet->setRightToLeft(true);
        return [
            1    => ['font' => ['bold' => true , 'background'=>'#eee','size' => 14]],
        ];
    }



}
