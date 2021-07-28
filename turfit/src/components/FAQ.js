import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import "./FAQ.css";
export default function FAQ() {
  const queries = [
    {
      query:
        "1. I'm a huge fan of Michael Jackson! Can I wear his custom boots and do a moon walk when I score a goal?",
      answer:
        "We are huge fans of the 'King of Pop' too, but sadly, our turfs aren't. It hurts them physically and we've heard emotionally, too. We would love it if you could keep all that leather for the concert. You can wear astro or moulded boots, strictly no blades or metal studs allowed.",
    },
    {
      query: "Can I hold a tournament at your turf?",
      answer:
        "Yes. We absolutely love it when people fight! We mean, for the trophy. Physical fights are for the Fight Club! Ouch, did we just break Rule no. 1? Ok, please get in touch with us to avail of our tournament organising services.",
    },
    {
      query:
        "I absolutely creamed that shot and took the absolute mickey outof the goalkeeper! Can I get a video of it to show my mates?",
      answer:
        "Yes! Tell us the goalkeeper's name and we shall join in on the fun.You know what sounds like a good idea? Tagging him on our page, andthen tagging his friends, and maybe his girlfriend?",
    },
    {
      query: "I just got fouled by the opposition! What do I do?",
      answer:
        "You're playing football, not chess! It's a contact sport. Stop cribbing, get up and get on with it. But yeah, if it really hurts a lot, ask our facility manager for the first aid kit.",
    },
    {
      query: "Can I eat/drink on the turf?",
      answer:
        " Hey, we love food too! And we go to the pub for that. Not to the turf.",
    },
    {
      query: "Do we play underarm or overarm?",
      answer:
        "Well, that's up to you and your mates! We are not the ICC and won't call you out for chucking in case that ever comes up.",
    },
    {
      query: "Can we play with season ball?",
      answer: "No. Please, just no! Tennis balls only.",
    },
  ];
  return (
    <MDBContainer>
      <MDBTypography variant="h1">FAQs</MDBTypography>
      <MDBRow className="FAQ-container">
        {queries.map((article, key) => {
          return (
            <MDBCol size="6" md="4" className="article border border-light" >
              <span className="article-query">{article.query}</span>
              <span className="article-answer">{article.answer}</span>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}
