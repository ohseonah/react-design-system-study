import ButtonDemo from "../components/button/Button.demo.tsx";
import {_aside_AsideContent, _div_GuidePageWrapper, _div_GuidePageContent} from "./GuidePage.style.ts";

const COMPONENT_LIST = [
  {id: 'button', label:'Button', Component: ButtonDemo},
];

const GuidePage = () => {
  return (
      <_div_GuidePageWrapper>

        { /* sidebar */ }
        <_aside_AsideContent>
          {COMPONENT_LIST.map(item => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
          ))}
        </_aside_AsideContent>

        {/* contents */}
        <_div_GuidePageContent>
          {COMPONENT_LIST.map(({ id, label, Component }) => (
              <section key={id} id={id}>
                <h2>{label}</h2>
                <Component />
              </section>
          ))}
        </_div_GuidePageContent>
      </_div_GuidePageWrapper>
  );
};

export default GuidePage;