import Button from "./Button.tsx";
import GuideBlock from "../../guide/GuideBlock.tsx";

const ButtonDemo = () => {
  return (
      <div>
        {/* 1. Variants */}
        <GuideBlock title='Variants'>
          <Button variant='solid' onClick={()=>console.log('button')}>Button</Button>
          <Button variant='outline' onClick={()=>console.log('button')}>Button</Button>
          <Button variant='ghost' onClick={()=>console.log('button')}>Button</Button>
          <Button variant='text' onClick={()=>console.log('button')}>Button</Button>
        </GuideBlock>

        {/* 2. Colors */}
        <GuideBlock title="Colors">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
        </GuideBlock>

        {/* 3. Sizes */}
        <GuideBlock title="Sizes">
          <Button size="large" onClick={()=>console.log('button')}>Large</Button>
          <Button size="medium" onClick={()=>console.log('button')}>Medium</Button>
          <Button size="small" onClick={()=>console.log('button')}>Small</Button>
          <Button size="tiny" onClick={()=>console.log('button')}>Tiny</Button>
        </GuideBlock>

        {/* 4. Radius */}
        <GuideBlock title="Radius">
          <Button radius="square">Square</Button>
          <Button radius="soft">Soft</Button>
          <Button radius="curved">Curved</Button>
          <Button radius="pill">Pill</Button>
        </GuideBlock>

        {/* 5. With Icon */}
        <GuideBlock title="With Icon">
          <Button leftIcon="arrow-left-o" leftIconProps={{tone:'white'}}>Left Icon</Button>
          <Button rightIcon="arrow-right-o" rightIconProps={{tone:'white'}}>Right Icon</Button>
        </GuideBlock>

        {/* 6. Icon Layout */}
        <GuideBlock title="Icon Layout">
          <Button
              leftIcon="arrow-left-o"
              iconLayout="inline"
              leftIconProps={{size:'sm', tone:'white'}}
          >
            Inline
          </Button>

          <Button
              leftIcon="arrow-left-o"
              iconLayout="between"
              leftIconProps={{size:'sm', tone:'white'}}
          >
            Between
          </Button>
        </GuideBlock>

        {/* 7. States */}
        <GuideBlock title="States">
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </GuideBlock>

        {/* 8. Full Width */}
        <GuideBlock title="Full Width">
          <div style={{ width: '240px' }}>
            <Button fullWidth>Full Width</Button>
          </div>
        </GuideBlock>

        {/* 9. Long Text */}
        <GuideBlock title="Long Text">
          <Button style={{ width: '200px' }}>
            버튼 텍스트가 길어질 때 어떻게 보이는지 확인하는 영역
          </Button>
        </GuideBlock>
      </div>
  );
};

export default ButtonDemo;