//Pages
import Blog from 'pages/blog'
import Login from 'pages/Login/Login'
import HomePage from 'pages/Home'
import Register from 'pages/Register'

//Layouts
import DefaultLayout from 'layouts/DefaultLayout'

//routesConfig
import config from '../config'
import { Fragment } from 'react/jsx-runtime'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayoutProps } from 'interfaces/layout.interface'

interface publicRoute {
  path: string
  component: (props: any) => JSX.Element
  layout?: ({ children }: DefaultLayoutProps) => JSX.Element
}

type typePublicRoutes = publicRoute[]

const publicRoutes: typePublicRoutes = [
  { path: config.routes.blog, component: Blog, layout: DefaultLayout },
  { path: config.routes.login, component: Login, layout: DefaultLayout },
  { path: config.routes.home, component: HomePage, layout: DefaultLayout },
  { path: config.routes.register, component: Register }
]

const PublicRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component
        let Layout: any = Fragment
        if (route.layout) {
          Layout = route.layout
        }
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        )
      })}
    </Routes>
  )
}

export default PublicRoutes