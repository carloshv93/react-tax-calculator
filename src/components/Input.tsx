import styled from 'styled-components'
import { useField } from 'formik'
import PropTypes from 'prop-types'

const Control = styled.div`
    margin-bottom: 20px;
`
const Label = styled.label`
    color: #000;
    display: block;
    margin-bottom: 5px;
`

Input.propTypes = {
  label: PropTypes.string.isRequired
}

const MyInput = styled.input`
    outline: none;
    padding: 8px;
    boder: solid 1px #b1b3b5;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 5px;
`
const ErrorMessage = styled.div`
    color: #f00;
`

function Input ({ label, ...props }) {
  const [field, meta] = useField(props)

  return (
      <Control>
          <Label>
               {label}
          </Label>
          <MyInput {...field} {...props}/>
          {meta.touched && meta.error &&
            <ErrorMessage>{meta.error}</ErrorMessage>}

      </Control>
  )
}

export default Input
