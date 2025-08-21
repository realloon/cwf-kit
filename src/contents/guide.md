# 模组适配指南

CustomizeWeapon 内置着 <b>CustomizeWeaponFramework</b>（CWF）框架。如果您是模组作者，想为模组添加本框架所提供的特性，阅读本文将会有很大帮助。

## 术语表

- 部件（Part）：武器可改装的部件，如瞄具、枪托；
- 模块（Module）：安装在部件上的武器模块，如全息瞄具、伸缩枪托；
- 词条（Trait）：改变武器的数值或机制，一个模块对应一个词条。

例如，突击步枪可改装“瞄具”部件，安装“全息瞄具”模块后，为其提供了“全息瞄具”词条。

> 对于玩家来说，模块和词条是无需区分的。

## 动态词条

您的模组适配 CWF 时，无需一开始就支持全部特性，可以随开发按需引入，渐进式增强。

例如，添加 `DynamicTraits`，武器将支持安装模块；添加 `DynamicGraphic`，将响应动态贴图变化。

如果您想为武器添加模块功能，又暂未准备好各模块的贴图，只需写入前者即可。

### 改装部件

在武器的 `comps` 中添加以下代码：

```xml
<li MayRequire="Vortex.CustomizeWeapon" Class="CWF.CompProperties_DynamicTraits">
  <supportParts> <!-- 👈 -->
    <li>Sight</li>
    <li>Magazine</li>
    <!-- ... -->
  </supportParts>
</li>
```

> 如果您的武器继承自 `BaseHumanMakeableGun` 且打算附加 `Ability`，需要为 `comps` 设置 `Inherit="False"`，并复制所需 comps，就像地狱猫步枪那样。

武器将支持改装 `supportParts` 所枚举的部件，并提供一个改装面板。

注意 `MayRequire="Vortex.CustomizeWeapon"`，它保证您的模组既可以使用框架所提供的功能，又无需强制要求其为前置，这被称为软依赖。当玩家未启用框架时，整个 `li` 会被忽略。

### 默认模块

如果您需要让武器自带某些模块，如狙击步枪自带瞄准镜，在 `defaultWeaponTraitDefs` 中填入 `WeaponTraitDef`：

```xml
<li MayRequire="Vortex.CustomizeWeapon" Class="CWF.CompProperties_DynamicTraits">
  <supportParts>
    <li>Sight</li>
    <li>Magazine</li>
    <!-- ... -->
  </supportParts>
  <defaultWeaponTraitDefs> <!-- 👈 -->
    <li>CWF_Trait_8xScope</li>
    <!-- ... -->
  </defaultWeaponTraitDefs>
</li>
```

> 您只需填入 `WeaponTraitDef` 的 `defName`；如果您添加了多个同一部件的模块，将会看到报错。

### 可用模块

同时满足以下条件时，某模块可用安装在某武器上：

1. 武器的 `supportParts` 包含模块的 `part`；
2. 模块的 `requiredWeaponTags` 包含武器的 `weaponTags`。

> 实际上，模块支持的筛选条件不限于 `requiredWeaponTags`，但 CWF 只使用了它。

## 动态贴图

TODO

尝试使用：[偏移计算器](/offset-calc)。

## 可重命名

TODO

## 完整示例

这是一个用到 CWF 完整特性的武器 xml 示例：

```xml
<ThingDef ParentName="BaseHumanMakeableGun">
  <defName>My_Gun_AssaultRifle</defName> <!-- 👈 您不应该使用 "CWF_" 前缀 -->
  <label>my assault rifle</label>
  <description>An assault rifle with customized parts.</description>
  <graphicData>
    <texPath>MyMod/Weapons/AssaultRifle/AssaultRifle</texPath>
    <graphicClass>Graphic_Single</graphicClass>
    <shaderType>CutoutComplex</shaderType> <!-- 👈 使用 "CutoutComplex" 类型 -->
  </graphicData>
  <weaponTags> <!-- 👈 将用于适用模块筛选 -->
    <li>CWF_AssaultRifle</li>
    <li>CWF_BurstFire</li>
  </weaponTags>
  <comps Inherit="False"> <!-- 👈 阻止继承 "comps" -->
    <!-- #region 只需要复制这部分 -->
    <li Class="CompProperties_EquippableAbilityReloadable" />
    <li Class="CompProperties_Forbiddable" />
    <li Class="CompProperties_Styleable" />
    <li Class="CompProperties_Biocodable" />
    <li>
      <compClass>CompQuality</compClass>
    </li>
    <li Class="CompProperties_Art">
      <nameMaker>NamerArtWeaponGun</nameMaker>
      <descriptionMaker>ArtDescription_WeaponGun</descriptionMaker>
      <minQualityForArtistic>Excellent</minQualityForArtistic>
    </li>
    <!-- #endregion -->
    <li MayRequire="Vortex.CustomizeWeapon" Class="CWF.CompProperties_DynamicTraits">
      <supportParts>
        <li>Sight</li>
      </supportParts>
    </li>
    <li MayRequire="Vortex.CustomizeWeapon" Class="CWF.CompProperties_DynamicGraphic">
      <attachmentPoints>
        <li>
          <part>Sight</part>
          <baseTexture>
            <texturePath>CustomizeWeapon/Weapons/AssaultRifle/Sight</texturePath>
            <outlinePath>CustomizeWeapon/Weapons/AssaultRifle/Sight_o</outlinePath>
            <offset>(77, 175)</offset>
          </baseTexture>
          <layer>20</layer>
        </li>
      </attachmentPoints>
    </li>
    <li MayRequire="Vortex.CustomizeWeapon" Class="CWF.CompProperties_Renamable" />
    <li MayRequire="Vortex.CustomizeWeapon" Class="CWF.CompProperties_Colorable" />
  </comps>
  <thingCategories Inherit="False">
    <li>CWF_CustomizedWeapons</li>
  </thingCategories>
</ThingDef>
```
