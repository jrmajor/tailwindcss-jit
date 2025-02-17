const { asValue, nameClass } = require('../pluginUtils')

module.exports = function ({ matchUtilities, jit: { theme, addVariant, e } }) {
  matchUtilities({
    'bg-opacity': (modifier, { theme }) => {
      let value = asValue(modifier, theme.backgroundOpacity)

      if (value === undefined) {
        return []
      }

      return { [nameClass('bg-opacity', modifier)]: { '--tw-bg-opacity': value } }
    },
  })
}
