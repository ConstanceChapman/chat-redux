import { combineReducers } from 'redux';
import ChannelsReducer from './channels_reducer';
import CurrentUserReducer from './current_user_reducer';
import MessagesReducer from './messages_reducer';
import SelectedChannelReducer from './selected_channel_reducer';

const rootReducer = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
  currentUser: CurrentUserReducer,
  selectedChannel: SelectedChannelReducer,
});

export default rootReducer;
