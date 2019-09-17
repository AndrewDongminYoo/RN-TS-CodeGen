
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_failure/COMMANDS_DEFINED_WITHOUT_METHOD_NAMES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {Int32} from 'react-native-tscodegen-types';
import {React} from 'react-native-tscodegen-types';
import {NativeComponent} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import codegenNativeCommands from '../../lib/codegenNativeCommands';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

interface NativeCommands {
  hotspotUpdate(viewRef: React.Ref<'RCTView'>, x: Int32, y: Int32): void;
  scrollTo(viewRef: React.Ref<'RCTView'>, y: Int32, animated: boolean): void;
}

export type ModuleProps = Readonly<ViewProps & {
}>;

export const Commands = codegenNativeCommands<NativeCommands>();

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


