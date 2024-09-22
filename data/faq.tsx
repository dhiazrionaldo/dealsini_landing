import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: 'Apa itu dealsini.com?',
      a: (
        <>
          e-commerce yang memungkinkan anda untuk mencari apapun disekitar anda
           <br /> ataupun e-commerce yang dapat membantu anda untuk menjual ataupun menyewakan jasa anda ke sekitar.
        </>
      ),
    },
    {
      q: 'Bagaimana cara mendaftarkan produk saya?',
      a: "Anda dapat mendaftarkan produk anda ketika sudah registrasi sebagai seller.",
    },
    {
      q: 'Dimana saya dapat akses dealsini.com?',
      a: 'Anda bisa temukan aplikasi ini di appstore ataupun playstore anda.',
    },
    {
      q: 'Apakah bisa melakukan pembayaran dengan e-wallet (QRIS, Gopay, dll)?',
      a: 'Ya, anda bisa melakukan pembayaran dengan e-wallet anda yang terdaftar pada dealsini.com.',
    },
  ],
}

export default faq
