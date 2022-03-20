import styled from 'styled-components'
import { Formik, Form } from 'formik'

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
          }
        }
        onSubmit={handleSubmit}>
        </Formik>
      </Section>
    </Container>
  )
}

export default App
