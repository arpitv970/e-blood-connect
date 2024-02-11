'use client'
import React, { useEffect, useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BLOOD_COMPONENT, BLOOD_TYPE } from '@/lib/constant'
import { IAddress, ICity, IState } from '@/lib/types'
import { FindBloodBankFormSchema } from '@/lib/zod-schemas'

const FormSchema = FindBloodBankFormSchema;

type FormType = z.infer<typeof FormSchema>


const FindBloodForm = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    mode: 'onBlur'
  })

  const formData = form.watch();
  const selectedState = form.watch('state')

  const [states, setStates] = useState<IState[]>()
  const [cities, setCities] = useState<ICity[]>()



  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const fetchState = async () => {
    await fetch(`${API_BASE_URL}/address/state`)
      .then((res) => res.json())
      .then(data => setStates(data.data))
      .catch((error) => {
        console.log(error)
      })
  }

  const fetchCity = async (state_id: string) => {
    await fetch(`${API_BASE_URL}/address/district/${state_id}`)
      .then((res) => res.json())
      .then(data => setCities(data.data))
      .catch(error => console.log(error))
  }

  const fetchBloodBanks = async (body: any) => {
    await fetch(`${API_BASE_URL}/web/find-blood-bank`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => console.log('blood banks --> ', data.data))
      .catch(error => console.log(error))
  }

  const onSubmit = (data: FormType) => {
    console.log(data)
    fetchBloodBanks(data)
  }

  useEffect(() => {
    fetchState();
  }, [])

  useEffect(() => {
    const state = states?.find(state => state.name === selectedState)
    state && fetchCity(String(state.id))
  }, [selectedState])
  return (
    <Form
      {...form}
    >
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full space-x-6 flex justify-evenly items-center'>
        <FormField
          control={form.control}
          name='state'
          render={({ field }) => (
            <FormItem className='w-1/5'>
              <FormLabel>State</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select State' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    states?.map((state, i) => (
                      <SelectItem
                        key={i}
                        value={state.name}>
                        {state.name}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='city'
          render={({ field }) => (
            <FormItem className='w-1/5'>
              <FormLabel>City</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select City' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    cities?.map((city, i) => (
                      <SelectItem
                        key={i}
                        value={city.name}>
                        {city.name}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='bloodtype'
          render={({ field }) => (
            <FormItem className='w-1/5'>
              <FormLabel>Blood Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select Blood Type' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    Object.values(BLOOD_TYPE).map((value, i) => (
                      <SelectItem
                        key={i}
                        value={value}
                      >
                        {value}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='component'
          render={({ field }) => (
            <FormItem className='w-1/5'>
              <FormLabel>Blood Component</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select Blood Type' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    Object.values(BLOOD_COMPONENT).map((value, i) => (
                      <SelectItem
                        key={i}
                        value={value}
                      >
                        {value}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />


        <Button className='w-1/5' type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default FindBloodForm
