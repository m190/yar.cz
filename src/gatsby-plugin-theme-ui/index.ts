import merge from "deepmerge"
import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"

export default merge(baseTheme, {
  useColorSchemeMediaQuery: true
})
