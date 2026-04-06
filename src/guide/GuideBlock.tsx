// GuideBlock.tsx

interface GuideBlockProps {
  title: string;
  children: React.ReactNode;
}

const GuideBlock = ({ title, children }: GuideBlockProps) => {
  return (
      <section style={{marginBottom: '4rem'}}>
        <h3 style={{marginBottom: '1.6rem'}}>{title}</h3>
        <div style={{display: 'flex', gap: '1.2rem', flexWrap: 'wrap', alignItems: 'center'}}>
          {children}
        </div>
      </section>
  );
};

export default GuideBlock;