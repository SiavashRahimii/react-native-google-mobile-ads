/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import type { Double, UnsafeObject } from 'react-native/Libraries/Types/CodegenTypes';

export type NativeAdProps = {
  responseId: string;
  advertiser: string | null;
  body: string | null;
  callToAction: string | null;
  headline: string | null;
  price: string | null;
  store: string | null;
  ratings: Double | null;
  icon: NativeAdImage | null;
  images: Array<NativeAdImage> | null;
  extras: UnsafeObject | null;
};

export type NativeAdImage = {
  url: string;
  scale: Double;
};

export interface Spec extends TurboModule {
  load(adUnitId: string, requestOptions: UnsafeObject): Promise<NativeAdProps>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RNGoogleMobileAdsNativeModule');
