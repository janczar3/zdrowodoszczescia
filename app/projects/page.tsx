import Image from 'next/image'
import Link from 'next/link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Program Żywieniowy' })

export default function Projects() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold">Program Żywieniowy</h1>
      <p className="mb-6 text-lg">
        <strong>To coś więcej niż plan żywieniowy.</strong>
        <br />
        To spokojna droga ku lepszemu samopoczuciu, oparta na sprawdzonym programie, który łączy
        wiedzę dietetyczną z codziennym wsparciem i pozytywną energią.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Co zawiera program?</h2>
      <ul className="list-inside list-disc space-y-2">
        <li>
          Kompletny <strong>plan odżywiania</strong> oparty na naturalnych, prostych składnikach
        </li>
        <li>
          Jasne, praktyczne <strong>zalecenia żywieniowe i stylu życia</strong>
        </li>
        <li>
          <strong>Suplementację</strong>, która wspomaga cały proces
        </li>
        <li>
          <strong>Stałe, życzliwe wsparcie dietetyka</strong> – nie tylko merytoryczne, ale i
          emocjonalne
        </li>
        <li>
          <strong>Motywujące towarzyszenie</strong> na każdym etapie – bo zmiany najlepiej wprowadza
          się razem
        </li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Dla kogo jest ten program?</h2>
      <ul className="list-inside list-disc space-y-2">
        <li>
          Dla osób, które chcą <strong>czuć się lżej – fizycznie i psychicznie</strong>
        </li>
        <li>
          Dla tych, którzy chcą <strong>zredukować masę ciała bez presji i głodówek</strong>
        </li>
        <li>
          Dla każdego, kto chce <strong>odzyskać energię i równowagę</strong>
        </li>
        <li>
          Dla tych, którzy szukają <strong>jasnego planu i wsparcia</strong> w zmianie nawyków
        </li>
      </ul>

      <h2 className="mt-10 mb-6 text-2xl font-semibold">Przemiany uczestników</h2>

      <div className="space-y-10">
        <div>
          <h3 className="mb-2 text-xl font-semibold">Wioletta, - 10 kg w 2 miesiące</h3>
          <Image
            src="/static/images/project/img1.png"
            alt="Przemiana Wioletty"
            width={700}
            height={400}
            className="rounded-xl"
          />
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">Bartek, -22 kg w 3 miesiące</h3>
          <Image
            src="/static/images/project/img2.png"
            alt="Przemiana Bartka"
            width={700}
            height={400}
            className="rounded-xl"
          />
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">Julia, -15 kg w 4 miesiące</h3>
          <Image
            src="/static/images/project/img3.png"
            alt="Przemiana Julii"
            width={700}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="mb-4 text-lg font-medium">
          Gotowa/Gotowy na zmianę? Program został stworzony z troską – a dzięki{' '}
          <strong>stałemu wsparciu dietetyka</strong> i <strong>pozytywnej atmosferze</strong>,
          wszystko staje się łatwiejsze.
        </p>
        <h2 className="mb-2 text-2xl font-semibold">Skontaktuj się!</h2>
        <p className="text-md">
          <strong>Telefon:</strong>{' '}
          <a href="tel:733818879" className="text-blue-600 hover:underline">
            733 818 879
          </a>
          <br />
          <strong>Email:</strong>{' '}
          <a href="mailto:zdrowodoszczescia@gmail.com" className="text-blue-600 hover:underline">
            zdrowodoszczescia@gmail.com
          </a>
        </p>
      </div>

      <p className="mt-8 text-center text-sm text-gray-600 italic">
        Nie musisz robić wszystkiego perfekcyjnie. Wystarczy, że zaczniesz.
      </p>
    </div>
  )
}
