"use client"

// pages/index.js
import Head from 'next/head';
import CustomTextField from '../../components/CustomTextField';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Custom Text Field</title>
        <meta name="description" content="Custom Text Field with Autocomplete and Tags" />
      </Head>

      <main>
        <CustomTextField />
      </main>
    </div>
  );
}

