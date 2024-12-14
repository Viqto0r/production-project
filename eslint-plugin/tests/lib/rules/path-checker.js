/**
 * @fileoverview feature sliced relative path checker
 * @author viqtor
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/path-checker'),
  RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({})
ruleTester.run('path-checker', rule, {
  valid: [
    {
      filename:
        'C:\\Users\\UserName\\Desktop\\Projects\\production-project\\src\\entities\\Article',
      code: "import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'",
      errors: [
        {
          messageId: 'relativeImport',
        },
      ],
    },
  ],

  invalid: [
    {
      filename:
        'C:\\Users\\UserName\\Desktop\\Projects\\production-project\\src\\entities\\Article',
      code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article/model/slices/addCommentFormSlice'",
      errors: [
        {
          messageId: 'relativeImport',
        },
      ],
      options: [
        {
          alias: '@',
        },
      ],
    },
    {
      filename:
        'C:\\Users\\UserName\\Desktop\\Projects\\production-project\\src\\entities\\Article',
      code: "import { addCommentFormActions, addCommentFormReducer } from 'entities/Article/model/slices/addCommentFormSlice'",
      errors: [
        {
          messageId: 'relativeImport',
        },
      ],
    },
  ],
})
