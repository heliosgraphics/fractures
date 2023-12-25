import { v4 as uuidv4 } from 'uuid';

export const IS_TEST: boolean = process.env.NODE_ENV === 'test' as const;
export const TEST_UUID: string = '00000000-0000-0000-000000000000' as const;

export const getUUID = (id?: string) => {
  // Do not generate if given
  if (!!id) return id;

  // Do not generate in test env
  if (IS_TEST) return TEST_UUID

  return uuidv4();
}

export const isUUID = (uuid): boolean => {
  let s: any = "" + uuid;
  s = s.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');

  if (s === null) {
    return false;
  }

  return true;
}
