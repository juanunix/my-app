import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/';
import Hello, {IProps} from '../components/Hello';
import { IStoreState } from '../types/index';


export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm())
  }
}

export default connect<IProps>(mapStateToProps, mapDispatchToProps)(Hello);