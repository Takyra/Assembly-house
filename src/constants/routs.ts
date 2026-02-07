enum RoutNames {
  home = 'home',
  designing = 'designing',
  documentation = 'documentation',
  fireSafety = 'fireSafety',
  securitySystems = 'securitySystems',
  electricitySupply = 'electricitySupply',
  installationWorks = 'installationWorks',
}

export const routPaths: Record<RoutNames, string> = {
  [RoutNames.home]: '/',
  [RoutNames.designing]: RoutNames.designing,
  [RoutNames.documentation]: RoutNames.documentation,
  [RoutNames.fireSafety]: 'fire-safety',
  [RoutNames.securitySystems]: 'security-systems',
  [RoutNames.electricitySupply]: 'electricity-supply',
  [RoutNames.installationWorks]: 'installation-works',
}

export const routTitles: Record<RoutNames, string> = {
  [RoutNames.home]: 'Главная',
  [RoutNames.designing]: 'Проектирование',
  [RoutNames.documentation]: 'Документация',
  [RoutNames.fireSafety]: 'Пожарная безопасность',
  [RoutNames.securitySystems]: 'Систем контроля и безопасности',
  [RoutNames.electricitySupply]: 'Электроснабжение',
  [RoutNames.installationWorks]: 'Строительно-монтажные работы',
}

export const navigation = [{
  title: routTitles.designing,
  path: routPaths.designing,
}, {
  title: routTitles.documentation,
  path: routPaths.documentation,
}, {
  title: routTitles.fireSafety,
  path: routPaths.fireSafety,
}, {
  title: routTitles.securitySystems,
  path: routPaths.securitySystems,
}, {
  title: routTitles.electricitySupply,
  path: routPaths.electricitySupply,
}, {
  title: routTitles.installationWorks,
  path: routPaths.installationWorks,
}];