# 模组适配指南

<b>CustomizeWeapon</b> 为定制武器提供全面支持，并内置对原版武器的全面支持。如果您是模组作者，想为模组添加本框架所提供的特性，阅读本文将会有很大帮助。

## 渐进式增强

三方模组进行适配时，无需一开始就支持全部特性，而是随开发按需引入，这被称为渐进式增强。

例如，添加 `DynamicTraits`，武器将支持 `WeaponTraitDef` 集合，可动态增删词条；添加 `DynamicGraphic`，将响应动态贴图变化。

如果您想为武器添加模块功能，又暂未准备好各模块的贴图，只需写入前者即可。

## 术语表

- 部件（Part）：武器可改装的部件，如瞄具、枪托；
- 模块（Module）：安装在部件上的武器模块，如全息瞄具、伸缩枪托；
- 词条（Trait）：改变武器的数值或机制，一个模块对应一个词条。

例如，突击步枪可改装“瞄具”部件，安装“全息瞄具”模块后，为其提供了“全息瞄具”词条。

## 动态词条

在武器的 `comps` 中添加以下代码：

```xml
<li MayRequire="Vortex.CustomizeWeapon" Class="CWF.CompProperties_DynamicTraits">
  <supportParts>
    <li>Muzzle</li>
    <li>Barrel</li>
    <li>Receiver</li>
    <li>Trigger</li>
    <li>Stock</li>
    <li>Grip</li>
    <li>Sight</li>
    <li>Magazine</li>
    <li>Underbarrel</li>
    <li>Ammo</li>
  </supportParts>
</li>
```

武器将支持改装 `supportParts` 所枚举的部件，并提供一个改装面板。

注意 `MayRequire="Vortex.CustomizeWeapon"`，它保证了您的模组与 `CustomizeWeapon` 软依赖，无需强制要求为前置。当玩家未启用 `CustomizeWeapon`，这个 `li` 会被忽略。

## 动态贴图

<!-- TODO -->

## 可重命名

<!-- TODO -->

## 完整示例

这是一个完整适配 `CustomizeWeaponFramework` 的武器 xml 示例：

```xml
<ThingDef ParentName="BaseHumanMakeableGun">
  <defName>My_Gun_AssaultRifle</defName>
  <label>my assault rifle</label>
  <description>An assault rifle with customized parts.</description>
  <graphicData>
    <texPath>MyMod/Weapons/AssaultRifle/AssaultRifle</texPath>
    <graphicClass>Graphic_Single</graphicClass>
    <shaderType>CutoutComplex</shaderType>
  </graphicData>
  <weaponTags>
    <li>CWF_AssaultRifle</li>
    <li>CWF_BurstFire</li>
  </weaponTags>
  <comps Inherit="False">
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
    <li Class="CWF.CompProperties_DynamicTraits">
      <supportParts>
        <li>Sight</li>
      </supportParts>
    </li>
    <li Class="CWF.CompProperties_DynamicGraphic">
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
    <li Class="CWF.CompProperties_Renamable" />
    <li Class="CWF.CompProperties_Colorable" />
  </comps>
  <thingCategories Inherit="False">
    <li>CWF_CustomizedWeapons</li>
  </thingCategories>
</ThingDef>
```
