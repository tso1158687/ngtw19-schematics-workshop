// TODO: import 所需的工具程式 snippet: sch-apply-merge-templates-import

import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { apply, url, applyTemplates, move, chain, mergeWith } from '@angular-devkit/schematics';
import { strings, normalize } from '@angular-devkit/core';
export function exercise3(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    
    // TODO: 執行檔案合併工作 snippet: sch-apply-merge-templates
    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: _options.name
      }),
      move(normalize(_options.path as string))
    ]);
    
    return chain([
      mergeWith(templateSource)
    ]);
    return tree;
  };
}