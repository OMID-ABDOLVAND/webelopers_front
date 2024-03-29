import Header from "@/components/layouts/header";
import EN from "@/i18n/en";
import { Metadata } from "next";
import { SupportedLocaleType } from "@/i18n";
import StaticSection from "@/components/statics";

export const metadata: Metadata = {
  title: "بلوبری",
  description: "بزرگترین وبسایت پرسش و پاسخ",
  keywords: "بلوبری، سوال",
};

type Props = {
  params: {
    lang: SupportedLocaleType;
  };
};

export default function Home(props: any) {
  return (
    <main className="">
      <section>
        <Header lang={props.params?.lang} />
      </section>

      {/* This is statics */}
      <section>
        <StaticSection lang={props.params?.lang} />
      </section>
    </main>
  );
}
