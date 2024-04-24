import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const userPromise = await createUser();
    const photoPromise = await uploadPhoto();
    return ({ photo: photoPromise, user: userPromise });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
