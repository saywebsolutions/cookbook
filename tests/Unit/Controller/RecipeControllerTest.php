<?php

namespace OCA\Cookbook\tests\Unit\Controller;

require_once(__DIR__ . '/AbstractControllerTestCase.php');

namespace OCA\Cookbook\tests\Unit\Controller;

use Exception;
use OCA\Cookbook\Controller\Implementation\RecipeImplementation;
use OCP\IRequest;
use OCP\Files\File;
use OCP\IURLGenerator;
use ReflectionProperty;
use OCP\AppFramework\Http;
use PHPUnit\Framework\TestCase;
use OCP\AppFramework\Http\IOutput;
use OCA\Cookbook\Service\RecipeService;
use OCP\AppFramework\Http\DataResponse;
use OCA\Cookbook\Service\DbCacheService;
use OCA\Cookbook\Helper\RestParameterParser;
use PHPUnit\Framework\MockObject\MockObject;
use OCA\Cookbook\Controller\RecipeController;
use OCA\Cookbook\Exception\NoRecipeNameGivenException;
use OCP\AppFramework\Http\FileDisplayResponse;
use OCA\Cookbook\Exception\RecipeExistsException;
use OCA\Cookbook\Helper\AcceptHeaderParsingHelper;
use OCA\Cookbook\Helper\Filter\RecipeJSONOutputFilter;
use OCP\IL10N;
use PHPUnit\Framework\MockObject\Stub;

/**
 * @covers \OCA\Cookbook\Controller\RecipeController
 * @covers \OCA\Cookbook\Exception\NoRecipeNameGivenException
 */
class RecipeControllerTest extends AbstractControllerTestCase {

	protected function getClassName(): string {
		return RecipeController::class;
	}

	protected function getImplementationClassName(): string {
		return RecipeImplementation::class;
	}

	protected function getMethodsAndParameters(): array {
		return [
			['name' => 'index'],
			['name' => 'show', 'args' => [[123], ['123']]],
			['name' => 'update', 'args' => [[123], ['123']]],
			['name' => 'create'],
			['name' => 'destroy', 'args' => [[123], ['123']]],
			['name' => 'image', 'args' => [[123], ['123']]],
			['name' => 'import'],
			['name' => 'search', 'args' => [['The search']]],
			['name' => 'category', 'args' => [['The category']], 'implName' => 'getAllInCategory'],
			['name' => 'tags', 'args' => [['one keyword'], ['one keyword,another one']], 'implName' => 'getAllWithTags'],
		];
	}

	
}
