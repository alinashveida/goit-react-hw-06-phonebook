import { Input, Label } from './Filter.styled'
import { FaSearch } from 'react-icons/fa'

import { connect } from 'react-redux'
import action from '../../redux/action'

function Filter({ value, onChange }) {
  return (
    <Label>
      <FaSearch /> Find contacts by name
      <Input name="filter" onChange={onChange} value={value}></Input>
    </Label>
  )
}

const mapStateToProps = (state) => ({
  value: state.filter,
})

const mapDispathToProps = (dispatch) => ({
  onChange: (event) => dispatch(action.changeFilter(event.target.value)),
})
export default connect(mapStateToProps, mapDispathToProps)(Filter)
