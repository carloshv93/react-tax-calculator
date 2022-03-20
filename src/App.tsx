import styled from 'styled-components'
import { Formik, Form } from 'formik'
import Input from './components/Input'

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`

const Section = styled.section`
  background-color: #eee;
  border-top: solid 2px palevioletred;
  padding: 20px 25px;
  width: 500px;
  box-shadow: 0px 2px 3px rgb(0,0,0,0.3);
`
function App () {
  const handleSubmit = () => {}
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
        onSubmit={handleSubmit}>
          <Form>
            <Input name="deposit" label="Initial deposit"/>
            <Input name="contribution" label="Contribution"/>
            <Input name="years" label="Years"/>
            <Input name="rate" label="Rate"/>
          </Form>
        </Formik>
      </Section>
    </Container>
  )
}

export default App
