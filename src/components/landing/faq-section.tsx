import {
    Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="w-full h-screen bg-white relative z-[9] px-8 py-14">
      <div className="w-full flex justify-center items-center flex-col gap-2">
        <span className="font-semibold text-slate-400 uppercase">faq</span>
        <h2 className="text-5xl font-semibold text-center capitalize">
          frequently asked questions
        </h2>
      </div>
      <div className="px-24 mt-24">
        <Accordion type="single" className="w-full">
          <AccordionItem value={"item-1"}>
            <AccordionTrigger className="text-2xl">
              what are you doing ?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              dolore aspernatur, qui est vel optio! Expedita nesciunt cumque
              eaque fuga nam aliquam assumenda sunt totam neque. Animi ipsam
              vero deleniti.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-2"}>
            <AccordionTrigger className="text-2xl">
              what are you doing ?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              dolore aspernatur, qui est vel optio! Expedita nesciunt cumque
              eaque fuga nam aliquam assumenda sunt totam neque. Animi ipsam
              vero deleniti.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-3"}>
            <AccordionTrigger className="text-2xl">
              what are you doing ?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              dolore aspernatur, qui est vel optio! Expedita nesciunt cumque
              eaque fuga nam aliquam assumenda sunt totam neque. Animi ipsam
              vero deleniti.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-4"}>
            <AccordionTrigger className="text-2xl">
              what are you doing ?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              dolore aspernatur, qui est vel optio! Expedita nesciunt cumque
              eaque fuga nam aliquam assumenda sunt totam neque. Animi ipsam
              vero deleniti.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-5"}>
            <AccordionTrigger className="text-2xl">
              what are you doing ?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              dolore aspernatur, qui est vel optio! Expedita nesciunt cumque
              eaque fuga nam aliquam assumenda sunt totam neque. Animi ipsam
              vero deleniti.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-6"}>
            <AccordionTrigger className="text-2xl">
              what are you doing ?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              dolore aspernatur, qui est vel optio! Expedita nesciunt cumque
              eaque fuga nam aliquam assumenda sunt totam neque. Animi ipsam
              vero deleniti.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
