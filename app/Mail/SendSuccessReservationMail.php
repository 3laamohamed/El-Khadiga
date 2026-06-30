<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SendSuccessReservationMail extends Mailable
{
    use Queueable, SerializesModels;
    public $name;
    public $phone;
    public $order;
    /**
     * Create a new message instance.
     */
    public function __construct($name, $phone, $order)
    {
        $this->name   = $name;
        $this->phone  = $phone;
        $this->order  = $order;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Send New Order',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'email.form_link',
            with: [
                'name'   => $this->name ,
                'phone'  => $this->phone ,
                'order'  => $this->order,
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
