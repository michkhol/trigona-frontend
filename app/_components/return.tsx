"use client";

import { useEffect, useState } from 'react';
import { redirect, useSearchParams } from 'next/navigation';

export default function Return() {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');
  const urlParams = useSearchParams();

  useEffect(() => {
    
    const sessionId = urlParams.get('session_id');

    fetch(`/api/session?session_id=${sessionId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
        // Update data in crm
      });
  }, [urlParams]);

  if (status === 'open') {
    return (
      redirect('/')
    )
  }

  if (status === 'complete') {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to {customerEmail}.

          If you have any questions, please email <a href="mailto:support@trigonaconsulting.com">support@trigonaconsulting.com</a>.
        </p>
      </section>
    )
  }

  return null;
}