// @flow
import type {Action, ActionType} from '../action/types';
import type {Query} from '../query';
import type RefId from 'canner-ref-id';
import * as React from 'react';

export type Args = Object;
export type Fetch = (key: string) => Promise<*>
export type RequestWithAction = (action: Action<ActionType>, options: {write: boolean}) => Promise<*>;
export type RequestWithActions = (action: Array<Action<ActionType>>, options: {write: boolean}) => Promise<*>;
export type Request = RequestWithAction | RequestWithActions;
export type UpdateQuery = (paths: Array<string>, args: Args) => void;
export type Reset = (key?: string, id?: string) => Promise<*>;
export type Subscription = any;
export type Subscribe = (key: string, callback: (data: any) => void) => Subscription
export type Deploy = (key: string, id?: string) => Promise<*>;
export type OnDeploy = (key: string, callback: Function) => string;
export type RemoveOnDeploy = (key: string, callbackId: string) => void;
export type Validation = Object;
export type UIParams = Object;
export type Relation = Object;
export type RenderChildren = any => React.Node
export type Toolbar = {
  sort?: {
    component?: React.ComponentType<*>,
    [string]: *
  },
  pagination?: {
    component?: React.ComponentType<*>,
    [string]: *
  },
  filter?: {
    component?: React.ComponentType<*>,
    [string]: *
  },
  toolbarLayout?: {
    component?: React.ComponentType<*>,
    [string]: *
  }
};

export type HOCProps = {
  refId: RefId,
  keyName: string,
  routes: Array<string>,
  pattern: string,
  path: string,
  type: string,
  cacheActions: boolean,
  controlDeployAndResetButtons: boolean,
  hideButtons: boolean,
  validation: Validation,
  required: boolean,
  disabled: boolean,
  uiParams: UIParams,
  ui: string,
  relation: Relation,
  nodeType: string,
  rootValue: any,
  value: any,
  params: Object,
  items: Object,
  toolbar: Toolbar,
  schema: any,
  goTo: Function,
  query: Query,
  reset: Reset,
  fetch: Fetch,
  subscribe: Subscribe,
  request: Request,
  deploy: Deploy,
  updateQuery: UpdateQuery,
  onDeploy: OnDeploy,
  removeOnDeploy: RemoveOnDeploy,
  title: string,
  layout: 'inline' | 'vertical' | 'horizontal',
  description: string,
  hideTitle: boolean,
  renderChildren: RenderChildren,
  imageServiceConfig: Object,
  renderComponent: (refId: RefId, props: Object) => React.Node,
  renderConfirmButton: Object => React.Node,
  renderCancelButton: Object => React.Node,
}