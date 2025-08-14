# 模组适配指南

**`CustomizeWeaponFramework`：渐进式定制武器拓展框架**。

`CustomizeWeaponFramework` 为定制武器提供全面支持，这通过组合不同的 `ThingComp` 实现。三方模组进行适配时，无需一开始就支持全部特性，而是随开发按需引入。

例如，添加 `CWF.CompProperties_DynamicTraits`，武器将支持 `WeaponTraitDef` 集合，可动态增删词条。添加 `CWF.CompProperties_DynamicGraphic`，可响应动态贴图变化。



<!-- 这并不意味着你一开始就需要支持全部特性 -->

这是一个完整适配 `CustomizeWeaponFramework` 的武器示例：

```
<ThingDef ParentName="BaseHumanMakeableGun">
  <defName>CWF_Gun_AssaultRifle</defName>
  <label>customized assault rifle</label>
  <description>An assault rifle with customized parts.</description>
  <graphicData>
    <texPath>CustomizeWeapon/Weapons/AssaultRifle/AssaultRifle</texPath>
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
    <li Class="CWF.CompProperties_DynamicGraphic">
      <attachmentPoints>
        <li>
          <part>Receiver</part>
          <baseTexture>
            <texturePath>CustomizeWeapon/Weapons/AssaultRifle/Receiver</texturePath>
            <offset>(0, 0)</offset>
          </baseTexture>
          <layer>0</layer>
        </li>
        <li>
          <part>Sight</part>
          <baseTexture>
            <texturePath>CustomizeWeapon/Weapons/AssaultRifle/Sight</texturePath>
            <outlinePath>CustomizeWeapon/Weapons/AssaultRifle/Sight_o</outlinePath>
            <offset>(77, 175)</offset>
          </baseTexture>
          <layer>20</layer>
        </li>
        <li>
          <part>Barrel</part>
          <baseTexture>
            <texturePath>CustomizeWeapon/Weapons/AssaultRifle/Barrel</texturePath>
            <outlinePath>CustomizeWeapon/Weapons/AssaultRifle/Barrel_o</outlinePath>
            <offset>(257, 146)</offset>
          </baseTexture>
          <layer>20</layer>
        </li>
        <li>
          <part>Grip</part>
          <baseTexture>
            <texturePath>CustomizeWeapon/Weapons/AssaultRifle/Grip</texturePath>
            <outlinePath>CustomizeWeapon/Weapons/AssaultRifle/Grip_o</outlinePath>
            <offset>(31, 76)</offset>
          </baseTexture>
          <layer>20</layer>
        </li>
        <li>
          <part>Magazine</part>
          <baseTexture>
            <texturePath>CustomizeWeapon/Weapons/AssaultRifle/Magazine</texturePath>
            <outlinePath>CustomizeWeapon/Weapons/AssaultRifle/Magazine_o</outlinePath>
            <offset>(119, 66)</offset>
          </baseTexture>
          <layer>20</layer>
        </li>
        <li>
          <part>Stock</part>
          <baseTexture>
            <texturePath>CustomizeWeapon/Weapons/AssaultRifle/Stock</texturePath>
            <outlinePath>CustomizeWeapon/Weapons/AssaultRifle/Stock_o</outlinePath>
            <offset>(-35, 129)</offset>
          </baseTexture>
          <layer>20</layer>
        </li>
        <li>
          <part>Underbarrel</part>
          <baseTexture>
            <offset>(206, 90)</offset>
          </baseTexture>
          <layer>2</layer>
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
