import {
  connect,
} from 'react-redux';

import {
  successful,
  failed,
} from 'Actions/login';
import Login from 'Components/Login';

function mapDispatchToProps(dispatch) {
  return {
    onSuccess: data => dispatch(successful(data)),
    onFailure: data => dispatch(failed(data)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
