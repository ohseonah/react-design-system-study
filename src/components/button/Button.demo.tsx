import Button from "./Button.tsx";

const ButtonDemo = () => {
  return (
      <div style={{background: '#f5f5f5', width: '100%', height: '100vh'}}>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center' ,marginBottom: '1rem'}}>
          <Button size='large' onClick={() => console.log('button')}>Button</Button>
          <Button onClick={()=>console.log('button')}>Button</Button>
          <Button size='small' onClick={()=>console.log('button')}>Button</Button>
          <Button size='tiny' onClick={()=>console.log('button')}>Button</Button>
        </div>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center' ,marginBottom: '1rem'}}>
          <Button onClick={()=>console.log('button')}>Button</Button>
          <Button variant='outline' onClick={()=>console.log('button')}>Button</Button>
          <Button variant='ghost' onClick={()=>console.log('button')}>Button</Button>
          <Button variant='text' onClick={()=>console.log('button')}>Button</Button>
        </div>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center' ,marginBottom: '1rem'}}>
          <Button onClick={()=>console.log('button')}>Button</Button>
          <Button radius='soft' onClick={()=>console.log('button')}>Button</Button>
          <Button radius='curved' onClick={()=>console.log('button')}>Button</Button>
          <Button radius='pill' onClick={()=>console.log('button')}>Button</Button>
        </div>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center' ,marginBottom: '1rem'}}>
          <Button leftIcon='arrow-left-o' leftIconProps={{size:'sm', tone:'white'}} onClick={()=>console.log('button')}>button</Button>
          <Button leftIcon='arrow-left-o' leftIconProps={{size:'sm', tone:'white'}} iconLayout='between' onClick={()=>console.log('button')}>button</Button>
          <Button rightIcon='arrow-right-o' rightIconProps={{size:'sm', tone:'white'}} onClick={()=>console.log('button')}>button</Button>
          <Button rightIcon='arrow-right-o' rightIconProps={{size:'sm', tone:'white'}} iconLayout='between' onClick={()=>console.log('button')}>button</Button>
        </div>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center' ,marginBottom: '1rem'}}>
          <Button color='secondary' onClick={()=>console.log('button')}>Button</Button>
          <Button color='secondary' variant='outline' onClick={()=>console.log('button')}>Button</Button>
          <Button color='secondary' variant='ghost' onClick={()=>console.log('button')}>Button</Button>
          <Button color='secondary' variant='text' onClick={()=>console.log('button')}>Button</Button>
        </div>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center' ,marginBottom: '1rem'}}>
          <Button color='secondary' leftIcon='arrow-left-o' leftIconProps={{size:'sm', tone:'white'}} onClick={()=>console.log('button')}>button</Button>
          <Button color='secondary' leftIcon='arrow-left-o' leftIconProps={{size:'sm', tone:'white'}} iconLayout='between' onClick={()=>console.log('button')}>button</Button>
          <Button color='secondary' rightIcon='arrow-right-o' rightIconProps={{size:'sm', tone:'white'}} onClick={()=>console.log('button')}>button</Button>
          <Button color='secondary' rightIcon='arrow-right-o' rightIconProps={{size:'sm', tone:'white'}} iconLayout='between' onClick={()=>console.log('button')}>button</Button>
        </div>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center' ,marginBottom: '1rem'}}>
          <Button variant='text' leftIcon='arrow-left-o' leftIconProps={{size:'sm', tone:'current'}} onClick={()=>console.log('button')}>Button</Button>
          <Button variant='text' leftIcon='arrow-left-o' leftIconProps={{size:'sm', tone:'current'}} iconLayout='between' onClick={()=>console.log('button')}>Button</Button>
          <Button variant='text' color='secondary' rightIcon='arrow-right-o' rightIconProps={{size:'sm', tone:'current'}} onClick={()=>console.log('button')}>Button</Button>
          <Button variant='text' color='secondary' rightIcon='arrow-right-o' rightIconProps={{size:'sm', tone:'current'}} iconLayout='between' onClick={()=>console.log('button')}>Button</Button>
        </div>
      </div>
  );
};

export default ButtonDemo;