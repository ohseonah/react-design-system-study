import Button from "./Button.tsx";

const ButtonDemo = () => {
  return (
      <div style={{background: '#f5f5f5', width: '100%', height: '100vh'}}>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center' ,marginBottom: '1rem'}}>
          <Button size='large'>Button</Button>
          <Button>Button</Button>
          <Button size='small'>Button</Button>
          <Button size='tiny'>Button</Button>
        </div>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center' ,marginBottom: '1rem'}}>
          <Button>Button</Button>
          <Button variant='outline'>Button</Button>
          <Button variant='ghost'>Button</Button>
          <Button variant='text'>Button</Button>
        </div>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center' ,marginBottom: '1rem'}}>
          <Button>Button</Button>
          <Button radius='soft'>Button</Button>
          <Button radius='curved'>Button</Button>
          <Button radius='pill'>Button</Button>
        </div>
        {/*<div style={{display: 'flex', gap: '1rem', alignItems: 'center' ,marginBottom: '1rem'}}>*/}
        {/*  <button leftIcon={<Icon name="arrow-left-o" />}>button</button>*/}
        {/*  <button>button</button>*/}
        {/*  <button>button</button>*/}
        {/*  <button>button</button>*/}
        {/*</div>*/}
      </div>
  );
};

export default ButtonDemo;