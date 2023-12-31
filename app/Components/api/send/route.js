import { NextApiRequest, NextApiResponse } from 'next';

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export  async function POST() {

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['amanmoldeep@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
       <p> Email Body </p>
        </>
      ),
    });

    return NextResponse.json(200);
  } catch (error) {
    return NextResponse.json({error});
  }
};
