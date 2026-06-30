<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Contact Form</title>
</head>
<body style="margin: 0; padding: 0; background: #f4f6f4; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 24px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background: #ffffff; border: 1px solid #e6ebe6; border-radius: 12px; overflow: hidden;">
                    <tr>
                        <td style="padding: 24px 28px; background: linear-gradient(135deg, #A91E2C, #8E1824); color: #ffffff;">
                            <h2 style="margin: 0; font-size: 22px;">New Contact Form Submission</h2>
                            <p style="margin: 8px 0 0; font-size: 14px; opacity: 0.9;">El Khadiga for Export</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 28px;">
                            <p style="margin: 0 0 16px;"><strong style="color: #1a1a1a;">Name:</strong> {{ $senderName }}</p>
                            <p style="margin: 0 0 16px;"><strong style="color: #1a1a1a;">Email:</strong> <a href="mailto:{{ $senderEmail }}" style="color: #5A8F3C;">{{ $senderEmail }}</a></p>
                            <p style="margin: 0 0 8px;"><strong style="color: #1a1a1a;">Message:</strong></p>
                            <div style="padding: 16px; background: #f7f9f7; border: 1px solid #e6ebe6; border-radius: 10px; white-space: pre-wrap;">{{ $senderMessage }}</div>
                            <p style="margin: 24px 0 0; font-size: 13px; color: #6b7280;">Reply directly to this email to respond to the sender.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
