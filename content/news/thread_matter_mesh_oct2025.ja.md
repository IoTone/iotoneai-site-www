---
author: IoTJ
title: "M5NanoC6によるThread/Matterメッシュネットワーキング実験"
date: 2025-10-20
description: M5NanoC6を使用したArduinoベースのメッシュネットワーキング実験
tags:
    - iot
    - mesh
    - thread
    - matter
---

M5NanoC6を使用したArduinoベースのメッシュネットワーキング実験を行っています。インフラを必要としないアドホックネットワークの構築を目指しており、IR、AirDrop、BLE Meshに着想を得たデバイス間通信機能の復活を目標としています。

テストでは2台のノードで約24メートルの安定した通信範囲を確認しました。次のステップとして、汎用コードベースの整備とUARTチャットインターフェースの開発を進めています。

## リンク

- [スイッチリファレンスデザイン（GitHub）](https://github.com/IoTone/ProjectMagNET/tree/dev/reference-designs/MagNET_Thread_COaP_switch_esp32c6)
- [M5NanoC6製品ページ](https://docs.m5stack.com/en/core/M5NanoC6)
