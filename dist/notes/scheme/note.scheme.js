"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const yup = __importStar(require("yup"));
const YupNoteSchema = yup.object().shape({
    // id: yup.string().required(),
    name: yup.string(),
    created: yup.date(),
    category: yup.string(),
    content: yup.string(),
    archive: yup.boolean(),
    dates: yup.array()
});
exports.default = YupNoteSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS5zY2hlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub3Rlcy9zY2hlbWUvbm90ZS5zY2hlbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTJCO0FBRzNCLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDckMsK0JBQStCO0lBQy9CLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFO0lBQ2xCLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFO0lBQ25CLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFO0lBQ3RCLE9BQU8sRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFO0lBQ3JCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFO0lBQ3RCLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFO0NBQ3JCLENBQUMsQ0FBQztBQUVILGtCQUFlLGFBQWEsQ0FBQyJ9