import QuestionCard from "@/components/questions/cards";
import QuestionsHeader from "@/components/questions/header";
import Button from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import Paper from "@/components/ui/paper";
import { MdOutlineCalendarMonth } from "react-icons/md";
import PageClient from "./page-client";
import { useLocale } from "@/i18n";

const filterItems = [
  {
    title: "",
  },
];

export default function Page(props: any) {
  const locale = useLocale(props.params?.lang);

  return (
    <div className="space-y-5 container">
      <QuestionsHeader locale={locale} lang={props.params?.lang} />

      <div className="space-y-3">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>

      <PageClient />
    </div>
  );
}
