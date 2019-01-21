import {
  DEFAULT_ADD_IMAGE,
} from 'Client/stateLink';
import GetAddImage from 'GraphQL/queries/GetAddImage';

import validateImageURL from '../../validateImageURL';

export default async function setAddImage(
  _,
  { isOpen, url },
  { cache },
) {
  // TODO: @jaebradley this branching logic is kind've gross
  // Refactor so some other part of cache handles "open" state
  if (isOpen !== false) {
    const previous = cache.readQuery({ query: GetAddImage });
    let isValid = false;
    if (url) {
      isValid = await validateImageURL(url);
    }
    const updatedAddImage = {
      ...previous,
      isOpen: true,
      url,
      isValidImage: isValid,
      __typename: 'AddImage',
    };
    cache.writeData({
      data: { AddImage: updatedAddImage },
    });
  } else {
    cache.writeData({
      data: {
        AddImage: DEFAULT_ADD_IMAGE,
      },
    });
  }
}
