/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler:(() => {
    let compilerConfig = {
      styledComponents: true,
    }

    if(process.env.NODE_ENV === 'production'){
      compilerConfig = {
        ...compilerConfig,
        // 本番環境ではReact Testing Libraryでdata-testid属性を削除
        reactRemoveProperties: {properties: ['^data-testid$']},
      }
    }
    return compilerConfig;
  })(),
  async rewrites() {
    return [
      {
        // ex. api/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        // ex. http://localhsot:8000
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
}

module.exports = nextConfig
