// // for token renewal so that the user does not need to relogin 

// import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

// export default withApiAuthRequired(async function token(req, res) {
//   try {
//     const { accessToken } = await getAccessToken(req, res);
//     res.status(200).json({ accessToken });
//   } catch (error) {
//     res.status(error.status || 500).json({ error: error.message });
//   }
// });
