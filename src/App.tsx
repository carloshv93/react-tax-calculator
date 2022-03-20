import { Formik, Form } from 'formik'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'
import Section from './components/Section'
import Balance from './components/Balance'
import { useState } from 'react'
import * as Yup from 'yup'

const compoundInterest = (deposit:number, contribution:number, years:number, rate:number) => {
  let total:number = deposit
  for (let i = 0; i < years; i++) {
    total += contribution
    total *= rate + 1
  }
  return Math.round(total)
}
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
function App () {
  const [balance, setBalace] = useState(0)
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const value:number = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate))
    setBalace(value)
  }

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: ''
          }
        }
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          deposit: Yup
            .number()
            .required('Required')
            .typeError('Must be a number'),
          contribution: Yup
            .number()
            .required('Required')
            .typeError('Must be a number'),
          years: Yup
            .number()
            .required('Required')
            .typeError('Must be a number')
            .min(1, 'You should save your money for one year'),
          rate: Yup
            .number()
            .required('Required')
            .typeError('Must be a number')
            .min(0, 'Min value is 0')
            .max(1, 'Max value is 1')
        })}>
          <Form>
            <Input name="deposit" label="Initial deposit"/>
            <Input name="contribution" label="Contribution"/>
            <Input name="years" label="Years"/>
            <Input name="rate" label="Rate"/>
            <Button type='submit'>Calculate</Button>
          </Form>
        </Formik>
          {balance > 0 && <Balance>Final balance: {formatter.format(balance)}</Balance>}
      </Section>
    </Container>
  )
}

export default App
