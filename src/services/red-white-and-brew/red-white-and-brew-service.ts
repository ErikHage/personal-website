import { RWBData } from './types';
import redWhiteAndBrewDatasource from './red-white-and-brew-datasource';

function getRwabData(): RWBData {
  return redWhiteAndBrewDatasource.getRwabData();
}

export default {
  getRwabData,
};
