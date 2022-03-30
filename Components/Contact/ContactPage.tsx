import { Button, Grid, Input, Radio, Spacer, Textarea } from '@nextui-org/react'
import React from 'react'

const ContactPage = () => {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center'>
      <form className='text-center items-center' action="https://formspree.io/f/xgedyjkz"
      method="POST">
        
        <Input clearable underlined placeholder="Name" className='text-white placeholder:text-white dark: focus:text-white' color="primary" initialValue="John Doe"/>
        <Spacer y={1.5} />
        <Textarea  className='w-[25vw]  text-white ' name='message' bordered color="primary" required labelPlaceholder="Message" />
        <Spacer y={1.5} />
        <Input underlined labelPlaceholder="Budget" color='warning' helperColor="default" type="number" initialValue="500"/>
        <Spacer y={1.5} />

          <Radio.Group className='m-4' aria-required value="1" row>
              <Radio value="1">
                USD
              </Radio>
              <Radio value="2">
                CAD
              </Radio>
              <Radio value="3">
                GBP
              </Radio>
              <Radio value="4">
                EUR
              </Radio>
          </Radio.Group>
          <Button className='bg-white text-black text-center' type='submit'>Default</Button>
      </form>
    </div>
  )
}

export default ContactPage