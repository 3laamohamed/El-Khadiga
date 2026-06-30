<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactSubmissionController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        $query = ContactSubmission::query()->orderByDesc('id');

        if ($request->filled('q')) {
            $search = $request->input('q');
            $query->where(function ($builder) use ($search) {
                $builder->where('name', 'like', '%' . $search . '%')
                    ->orWhere('email', 'like', '%' . $search . '%')
                    ->orWhere('message', 'like', '%' . $search . '%');
            });
        }

        if ($request->input('status') === 'unread') {
            $query->whereNull('read_at');
        } elseif ($request->input('status') === 'read') {
            $query->whereNotNull('read_at');
        }

        return Inertia::render('ContactMessages/Index', [
            'messages' => $query->paginate(15)->withQueryString(),
            'stats' => [
                'total' => ContactSubmission::query()->count(),
                'unread' => ContactSubmission::query()->whereNull('read_at')->count(),
                'read' => ContactSubmission::query()->whereNotNull('read_at')->count(),
            ],
            'filters' => $request->only(['q', 'status']),
            'contactEmail' => config('mail.contact_to'),
        ]);
    }

    public function show(int $id): \Inertia\Response
    {
        $message = ContactSubmission::query()->findOrFail($id);

        if (! $message->read_at) {
            $message->update(['read_at' => now()]);
            $message->refresh();
        }

        return Inertia::render('ContactMessages/Show', [
            'message' => $message,
            'contactEmail' => config('mail.contact_to'),
        ]);
    }

    public function markUnread(int $id): \Illuminate\Http\RedirectResponse
    {
        ContactSubmission::query()
            ->findOrFail($id)
            ->update(['read_at' => null]);

        session()->flash('user_message', ['type' => 'success', 'msg' => 'Message marked as unread']);

        return back();
    }

    public function destroy(int $id): \Illuminate\Http\RedirectResponse
    {
        ContactSubmission::query()->findOrFail($id)->delete();

        session()->flash('user_message', ['type' => 'success', 'msg' => 'Message deleted successfully']);

        return redirect('/admin/messages');
    }
}
